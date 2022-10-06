import { Component } from "react"
import { StyleSheet, Text, View, Image, Button } from "react-native"

export default HomeScreen = ({ navigation }) => {
  const handleFollow = () => {
    alert("Hello...")
    console.log("On Press Button")
  }

  const MarginTop = () => <View style={{ marginTop: 15 }} />

  const handleProfile = () => {
    navigation.navigate("Profile", { name: "John Doe" })
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text>My First Application React Native using Expo CLI</Text>
        <Text style={{ fontWeight: "bold", color: "#015e08" }}>
          Hello World
        </Text>
      </View>

      <View style={styles.view}>
        <View style={styles.bgOne}>
          <HeaderText>View 1</HeaderText>
        </View>
        <View style={styles.bgSecond}>
          <HeaderText>View 2</HeaderText>
        </View>
      </View>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://i.pinimg.com/originals/fa/b2/8c/fab28cc14c94f570fb8774a98be6cc5e.jpg",
          }}
        ></Image>
        <Text style={styles.titleImg}>I`m Uchiha Itachi ~_</Text>
        <MarginTop />
        <View style={styles.rowButton}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Button
              color="#f89d2a"
              title="Follow Me"
              onPress={() => handleFollow()}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Button
              color="#05c6c3"
              title="Profile"
              onPress={() => handleProfile()}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

class HeaderText extends Component {
  render() {
    return (
      <>
        <Text
          style={{
            fontSize: 12,
            padding: 10,
            color: "#015e08",
            textAlign: "center",
          }}
        >
          {this.props.children}
        </Text>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    marginTop: 25,
    justifyContent: "center",
    flexDirection: "row",
    height: 150,
    width: 300,
  },
  bgOne: {
    backgroundColor: "#92fcd5",
    width: 100,
    height: 100,
    marginRight: 5,
  },
  bgSecond: {
    backgroundColor: "#fcec92",
    width: 100,
    height: 100,
    marginLeft: 5,
  },
  image: {
    width: 300,
    height: 100,
  },
  titleImg: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#68010d",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  rowButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
})
