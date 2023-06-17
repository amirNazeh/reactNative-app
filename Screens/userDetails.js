import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { usersContext } from '../Contexts/usersContext';
const UserDetails = () =>{
    const {users}=useContext(usersContext)
    const {params}=useRoute();
    const [user,setUser]=useState();
    useEffect(()=>{
        users.map((obj)=>obj.id===params?setUser(obj):obj)

       
    },[])

    if (!user) return<Text>Loading....</Text>
    return (
        <View style={styles.container}>
            <Text  style={styles.txt}>User Name: {user.username}
            </Text>
            <Text style={styles.txt}>Email: {user.email}
            </Text>
            <Text style={styles.txt}>Phone: {user.phone}
            </Text>
            <Text style={styles.txt}>Website: {user.website}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      alignItems:"center",
      height:"100%",
      justifyContent:"center"
    },
    txt:{
        fontWeight:'bold',
        padding:6,
        fontSize:20
    }
})
export default UserDetails