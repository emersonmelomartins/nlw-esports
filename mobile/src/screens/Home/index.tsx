import { Image, View, FlatList } from "react-native";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";

import { styles } from "./styles";
import logoPng from "../../assets/logo-nlw-esports.png";

import { GAMES } from "../../utils/games";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoPng} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <GameCard data={item} />;
        }}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
