import { View,Image,StyleSheet,Text } from "react-native";

function SecItem(props) {
    const {img, name} = props;
    console.warn(props)
    return (
        <>
            <View style={styles.container}>
             
             <Image style={styles.img} source={{uri: `${img}`
    
               }}></Image>
               <Text style={styles.text}>{name}</Text>
             
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row" ,
        height:50,
        margin:5,
    },
    img: {
      width:50,
      hight:"100%",
      
      
    },

    text:{
        marginHorizontal:5,
        alignSelf:"center",
        fontWeight: "bold",
    }
  });
  export default SecItem
