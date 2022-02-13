import Home from "../Pages/home";
import Alldata from "../Pages/alldata";
import TodayData from "../Pages/todaydata";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
        initialParams={{ title: "Home" }}
      />
      <Stack.Screen name="Alldata" component={Alldata} />
      <Stack.Screen name="TodayData" component={TodayData} />
    </Stack.Navigator>
  );
};
export default MainStack;
