import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";

import logoPng from "../../assets/logo-nlw-esports.png";
import { styles } from "./styles";
import { Background } from "../../components/Background";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetch("http://192.168.1.3:3333/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoPng} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <GameCard 
                data={item} 
                onPress={() => handleOpenGame(item)}
              />
            );
          }}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
