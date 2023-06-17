import { Text, SectionList, StyleSheet } from "react-native";
import SecItem from "./secItem";
function SecList(props) {
  const users = [
    {
      title: "A",
      data: [
        {
          id: "0",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HbqZyTk4fRBYWt-7H6ubyM0ex6A8WyVunKD2mqOAmA&s",
          name: "Amer",
        },
        {
          id: "2",
          img: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
          name: "Ahmed",
        },
        {
          id: "3",
          img: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
          name: "Abdo",
        },
      ],
    },
    {
      id: "1",
      title: "B",
      data: [
        {
          id: "4",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HbqZyTk4fRBYWt-7H6ubyM0ex6A8WyVunKD2mqOAmA&s",
          name: "Bassem",
        },
        {
          id: "5",
          img: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
          name: "Besho",
        },
      ],
    },
    {
      id: "2",
      title: "c",
      data: [
        {
          id: "4",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HbqZyTk4fRBYWt-7H6ubyM0ex6A8WyVunKD2mqOAmA&s",
          name: "Bassem",
        },
        {
          id: "5",
          img: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
          name: "Besho",
        },
      ],
    },
    {
      id: "2",
      title: "D",
      data: [
        {
          id: "4",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HbqZyTk4fRBYWt-7H6ubyM0ex6A8WyVunKD2mqOAmA&s",
          name: "Bassem",
        },
        {
          id: "5",
          img: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
          name: "Besho",
        },
      ],
    },
    {
      id: "2",
      title: "E",
      data: [
        {
          id: "4",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HbqZyTk4fRBYWt-7H6ubyM0ex6A8WyVunKD2mqOAmA&s",
          name: "Bassem",
        },
        {
          id: "5",
          img: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
          name: "Besho",
        },
      ],
    },
  ];

  return (
    <>
      <SectionList
        sections={users}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        renderItem={({ item }) => <SecItem name={item.name} img={item.img} />}
      ></SectionList>
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "grey",
    marginBottom: 5,
    width: "100%",
    padding: 10,
    fontWeight: "bold",
    fontSize:18,
  },
});
export default SecList;
