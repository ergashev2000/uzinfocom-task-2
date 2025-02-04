import { createContext, useContext, ReactNode } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../services/api';

interface CountI {
  user_id: number;
  category_id: number;
  count: number;
}

interface RatingsContextType {
  updateCount: (userId: number, categoryId: number, newCount: number) => void;
  counts: CountI[];
}

const RatingsContext = createContext<RatingsContextType | undefined>(undefined);

export const RatingsProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();
  const { data: counts = [] } = useQuery({
    queryKey: ["counts"],
    queryFn: api.getCounts,
  });

  const updateCount = (userId: number, categoryId: number, newCount: number) => {
    queryClient.setQueryData(["counts"], (oldData: CountI[] = []) => {
      const updatedCounts = [...oldData];
      const existingIndex = updatedCounts.findIndex(
        (c) => c.user_id === userId && c.category_id === categoryId
      );

      if (existingIndex !== -1) {
        updatedCounts[existingIndex] = {
          ...updatedCounts[existingIndex],
          count: newCount,
        };
      } else {
        updatedCounts.push({
          user_id: userId,
          category_id: categoryId,
          count: newCount,
        });
      }

      return updatedCounts;
    });
  };

  return (
    <RatingsContext.Provider value={{ counts, updateCount }}>
      {children}
    </RatingsContext.Provider>
  );
};

export const useRatings = () => {
  const context = useContext(RatingsContext);
  if (!context) {
    throw new Error('useRatings must be used within a RatingsProvider');
  }
  return context;
};
