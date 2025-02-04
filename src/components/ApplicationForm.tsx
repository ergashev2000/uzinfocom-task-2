import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { api } from "../services/api";
import { useState } from "react";
import Button from "./commons/Button";
import { ChevronDown } from "lucide-react";

const ApplicationForm = () => {
  const { t } = useTranslation();
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [count, setCount] = useState("");

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: api.getUsers,
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: api.getCategories,
  });

  const { data: counts = [] } = useQuery({
    queryKey: ["counts"],
    queryFn: api.getCounts,
  });

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(e.target.value);
    updateCount(e.target.value, selectedCategory);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    updateCount(selectedUser, e.target.value);
  };

  const updateCount = (userId: string, categoryId: string) => {
    if (userId && categoryId) {
      const existingCount = counts.find(
        (c) =>
          c.user_id === Number(userId) && c.category_id === Number(categoryId)
      );
      setCount(existingCount?.count.toString() || "0");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedUser && selectedCategory && count) {
      try {
        await api.setCount(
          Number(selectedUser),
          Number(selectedCategory),
          Number(count)
        );
        window.location.reload();
      } catch (error) {
        console.error("Error setting count:", error);
      }
    }
  };

  return (
    <div className="bg-[#F3F7F9] my-20 relative">
      <span className="bg-[#F3F7F9] w-full h-60 rounded-[100%] absolute -top-26 left-0 inset-0 -z-10"></span>
      <div className="container mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">
          {t("applicationForm.title")}
        </h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative h-full">
              <label htmlFor="user" className="block mb-2">
                {t("applicationForm.user")}
              </label>
              <span className="absolute bottom-1 right-3 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown size={20} />
              </span>
              <select
                value={selectedUser}
                onChange={handleUserChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
              >
                <option value="">{t("applicationForm.user")}</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id} className="text-black">
                    {user.first_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <label htmlFor="category" className="block mb-2">
                {t("applicationForm.category")}
              </label>
              <span className="absolute bottom-1 right-3 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown size={20} />
              </span>
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
              >
                <option value=""> {t("applicationForm.category")}</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="count" className="block mb-2">
                {t("applicationForm.count")}
              </label>
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                placeholder={t("applicationForm.count")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
              />
            </div>
            <Button type="submit" className="w-full">{t("applicationForm.submit")}</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
