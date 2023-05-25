import React from "react";
import { Text ,SafeAreaView, View ,FlatList, StyleSheet, ScrollView, Image, Dimensions} from "react-native";
import news_data from './news_data .json';
import NewsCard from "./components/Card/newscard";
import news_banner_data from './news_banner_data .json'
function app (){
  const renderNews =({item})=><NewsCard  news={item} />

 return (
  <SafeAreaView style={styles.container} >
     <Text style={styles.header_title}> News Haber App</Text>     

      <FlatList 
      ListHeaderComponent={()=> 
        <ScrollView horizontal  showsHorizontalScrollIndicator>

        {
          news_banner_data.map(bannernews=>(<Image style={styles.banner_image} source={{uri:bannernews.imageUrl}}/>))
        }
      </ScrollView>
      }
      keyExtractor={(item , index ) => (item.u_id.toString())}
       data={news_data} 
        renderItem={renderNews}
       />

  
  </SafeAreaView>


 );
}
 const styles = StyleSheet.create ({
   container : {
    flex :1,
    backgroundColor :'#eceff1',

   },
   banner_image :{
    height: Dimensions.get('window').height/5,
    width: Dimensions.get('window').width/5,
   },
   header_title :{
    fontSize : 20,
    fontWeight: 'bold',

   },


 })




export default app;