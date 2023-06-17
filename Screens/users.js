import axios from "axios";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import { usersContext } from "../Contexts/usersContext";
const Users = ({ navigation }) => {
  const { users } = useContext(usersContext);
  const [search, setSearch] = useState("");
  const [UsersList, setUsers] = useState([]);
  const handleChangeText = useCallback((value) => {
    setSearch(value);
  }, []);
  
  function searchfun(text) {
    text = text.toLocaleLowerCase();
    return users.filter((item) =>
      item.name.toLocaleLowerCase().includes(text)
    );
  }
  useEffect(() => {
    setUsers(users);
  }, []);
  useEffect(() => {
      setUsers(searchfun(search));
  }, [search]);

  
  return (
    <>
      <TextInput
        placeholder="search"
        value={search}
        onChangeText={(val) => handleChangeText(val)}
      ></TextInput>
      
      {UsersList.map((user) => (
        <View style={styles.container} key={user.id}>
          <Text style={styles.text}>{user.name}</Text>
          <Button
            color={"blue"}
            onPress={() => {
              navigation.navigate("details", user.id);
            }}
            title="Detalis"
          ></Button>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 5,
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
});

export default Users;
