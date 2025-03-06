import { TouchableOpacity } from "react-native";

import { ScrollView } from "react-native";

import { View, Text } from "react-native";
import { styles } from "../theme/HomeStyle";
import { useEffect, useState } from "react";

export const Category = ({ navigation }: { navigation: any }) => {
    const [cuisines, setCusines] = useState<any>(null);
    const fetchCusines = async () => {
        try {
          const response = await fetch(
            "https://api.wefood.dev/restaurants?limit=29"
          );
          if (!response.ok) throw new Error("Erro ao buscar dados");
    
          const result = await response.json();
          setCusines(result.docs); 
        } catch (err) {
          console.error("Erro ao buscar informações adicionais:", err);
          setCusines(null); 
        }
      };
    
      useEffect(() => {
        fetchCusines();
      }, []);
    
    
    const categories: { icon: string; name: string }[] = [
        { icon: "🇿🇦", name: "African" },
        { icon: "🇵🇹", name: "Alentejana" },
        { icon: "🇦🇹", name: "Austrian" },
        { icon: "☕", name: "Coffee" },
        { icon: "🥢", name: "Asian" },
        { icon: "🇦🇴", name: "Angolan" },
        { icon: "🖋️", name: "Author" },
        { icon: "🍰", name: "Bakery" },
      ];
    
    const filteredCuisines = (cuisines || [])
    .flatMap((restaurant: { cuisines: any }) => restaurant.cuisines || []) 
    .filter(
      (
        cuisine: { name: { en: string } },
        index: number,
        self: { name: { en: string } }[]
      ) =>
        index ===
        self.findIndex(
          (t) =>
            t.name?.en === cuisine.name?.en 
        )
    );
    

  return (
    <View style={styles.categoriesSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Cuisines</Text>
      </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {filteredCuisines && filteredCuisines.length > 0 ? (
                filteredCuisines.map((cuisine: any, cousineIndex: any) => {
                  const category = categories.find(
                    (category) => category.name === cuisine.name?.en
                  );
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("RestaurantByCuisine", {
                          cuisine: cuisine,
                        })
                      }
                      key={cousineIndex}
                      style={styles.categoryItem}
                    >
                      <Text style={styles.categoryIcon}>
                        {category ? category.icon : " "}
                      </Text>
                      <Text style={styles.categoryName}>
                        {cuisine.name?.en || " "}
                      </Text>
                    </TouchableOpacity>
                  );
                })
              ) : (
                <Text>Loading...</Text>
              )}
            </ScrollView>
          </View>
  );
};
