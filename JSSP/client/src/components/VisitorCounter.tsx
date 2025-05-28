import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const VisitorCounter = () => {
  const [hasIncremented, setHasIncremented] = useState(false);
  const queryClient = useQueryClient();

  // Get visitor count from the API
  const { data, isLoading, isError } = useQuery<{ count: number }>({
    queryKey: ['/api/visitors'],
    refetchInterval: 300000, // Refetch every 5 minutes
    refetchOnWindowFocus: false,
  });

  // Mutation to increment the visitor count
  const incrementMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest('POST', '/api/visitors/increment');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/visitors'] });
    },
  });

  useEffect(() => {
    // Increment visitor count on first load
    if (!hasIncremented && !isLoading && !isError) {
      incrementMutation.mutate();
      setHasIncremented(true);
    }
  }, [hasIncremented, isLoading, isError, incrementMutation]);

  const visitorCount = data?.count || 0;

  return (
    <div className="flex items-center justify-center space-x-2 py-3 bg-primary/10 rounded-lg">
      <Icon name="user-line text-primary" />
      <div>
        <div className="text-sm text-gray-600">Total Visitors</div>
        {isLoading ? (
          <div className="h-6 animate-pulse bg-gray-200 rounded-md w-20"></div>
        ) : (
          <motion.div 
            key={visitorCount}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-poppins font-semibold text-primary"
          >
            {visitorCount.toLocaleString()}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VisitorCounter;