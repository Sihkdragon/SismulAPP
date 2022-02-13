import Home from "../Pages/home";
import Alldata from "../Pages/alldata";
import TodayData from "../Pages/todaydata";
import Login from "../Pages/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const title = "Studen Data";
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
        params={title}
      />
      <Stack.Screen
        name="Alldata"
        component={Alldata}
        initialParams={{ itemId: 42 }}
      />
      <Stack.Screen name="TodayData" component={TodayData} />
    </Stack.Navigator>
  );
};
export default MainStack;
