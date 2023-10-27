import { StatusBar, StyleSheet, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import TweetContent from "../../components/TweetContent";
import { useEffect } from "react";

export default function TweetDetailScreen() {
   const {
      params: { tweet },
   } = useRoute();
   const navigation = useNavigation()

   useEffect(() => {
    navigation.setOptions({
        headerTitle: tweet.author.name
    })
   }, [])
   
   return (
      <View style={styles.container}>
         <TweetContent tweet={tweet} />
      </View>
   );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});