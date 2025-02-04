import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { api } from "../services/api";
import { useState } from "react";
import { useRatings } from "../context/RatingsContext";

const Ratings = () => {
  const { t } = useTranslation();
  const [sortColumn, setSortColumn] = useState<number | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const { counts } = useRatings();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: api.getUsers,
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: api.getCategories,
  });

  const getCountForUserAndCategory = (userId: number, categoryId: number) => {
    const count = counts.find(
      (c) => c.user_id === userId && c.category_id === categoryId
    );
    return count?.count || 0;
  };

  const calculateUserTotal = (userId: number) => {
    return categories.reduce((total, category) => {
      return total + getCountForUserAndCategory(userId, category.id);
    }, 0);
  };

  const calculateCategoryTotal = (categoryId: number) => {
    return users.reduce((total, user) => {
      return total + getCountForUserAndCategory(user.id, categoryId);
    }, 0);
  };

  const calculateGrandTotal = () => {
    return counts.reduce((total, count) => total + count.count, 0);
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortColumn === null) return 0;

    const aValue =
      sortColumn === categories.length
        ? calculateUserTotal(a.id)
        : getCountForUserAndCategory(a.id, categories[sortColumn]?.id || 0);

    const bValue =
      sortColumn === categories.length
        ? calculateUserTotal(b.id)
        : getCountForUserAndCategory(b.id, categories[sortColumn]?.id || 0);

    return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
  });

  const handleSort = (columnIndex: number) => {
    if (sortColumn === columnIndex) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(columnIndex);
      setSortDirection("desc");
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        {t('ratings.title')}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-b-white">
              <th className="p-2 text-left bg-[#F3F7F9] border-l border-l-white"></th>
              <th className="p-2 text-left bg-[#F3F7F9] border-l border-l-white"></th>
              {categories.map((category, index) => (
                <th
                  key={category.id}
                  className="py-2 px-4 text-sm text-center cursor-pointer bg-[#F3F7F9] whitespace-nowrap border-l border-l-white"
                  onClick={() => handleSort(index)}
                >
                  <span className="flex items-center gap-2">
                    {category.name}
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 6L9.33333 6.00008"
                          stroke="#6C7585"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 10H6.66667"
                          stroke="#6C7585"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 2H12.6667"
                          stroke="#6C7585"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.3346 14V6M12.3346 14C11.8678 14 10.9956 12.6705 10.668 12.3333M12.3346 14C12.8014 14 13.6736 12.6705 14.0013 12.3333"
                          stroke="#6C7585"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </th>
              ))}
              <th
                className="p-2 text-center cursor-pointer bg-[#F3F7F9]"
                onClick={() => handleSort(categories.length)}
              >
                Total
                {sortColumn === categories.length && (
                  <span className="ml-1">
                    {sortDirection === "asc" ? "↑" : "↓"}
                  </span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b border-white hover:bg-gray-100 ${
                  index % 2 !== 0 ? "bg-[#F3F7F9]" : ""
                }`}
              >
                <td className="py-2 px-4 font-bold text-center border-l border-l-white">
                  {index + 1}
                </td>
                <td className="py-2 px-4 flex items-center gap-2 border-l border-l-white">
                  <div className="w-8 h-8 bg-gray-300 rounded-full">
                    <img src={user.avatar} alt={user.first_name} />
                  </div>
                  {user.first_name}
                </td>
                {categories.map((category) => (
                  <td
                    key={category.id}
                    className={`py-2 px-4 text-center border-l border-l-white ${
                      getCountForUserAndCategory(user.id, category.id) < 0
                        ? "bg-[#EB575726] text-red-500"
                        : getCountForUserAndCategory(user.id, category.id) === 0
                        ? "bg-[#14C7A726] text-emerald-500"
                        : ""
                    }`}
                  >
                    {getCountForUserAndCategory(user.id, category.id)}
                  </td>
                ))}
                <td className="py-2 px-4 text-center font-medium">
                  {calculateUserTotal(user.id)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} className="py-2 px-4 font-bold">
                Общие
              </td>
              {categories.map((category) => (
                <td
                  key={category.id}
                  className={`py-2 px-4 text-center font-medium ${
                    calculateCategoryTotal(category.id) < 0
                      ? "bg-[#EB575726]"
                      : calculateCategoryTotal(category.id) === 0
                      ? "bg-[#14C7A726]"
                      : ""
                  }`}
                >
                  {calculateCategoryTotal(category.id)}
                </td>
              ))}
              <td className="py-2 px-4 text-center font-bold">
                {calculateGrandTotal()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Ratings;
