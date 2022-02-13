import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
import Home from "../Pages/home";
import Alldata from "../Pages/alldata";
import TodayData from "../Pages/todaydata";

const screens = {
  Home: {
    screen: Home,
  },
  TodayData: {
    screen: TodayData,
  },
  Alldata: {
    screen: Alldata,
  },
};

const MainStack = createStackNavigator(screens);

export default createAppContainer(MainStack);
