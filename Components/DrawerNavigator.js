<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomScreen from "../navigation/BottomScreen"; 
=======
=======
>>>>>>> 75e5302 (Second)
=======

>>>>>>> edb943d (done notifications)
// // DrawerNavigator.js (corrected)
// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// import Aboutus from './Aboutus';

// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator >

//     <Drawer.Screen name="AboutUs" component={Aboutus} />
//   </Drawer.Navigator>
//   );
// };

// export default DrawerNavigator;


// DrawerNavigator.js

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
<<<<<<< HEAD
import BottomScreen from "../navigation/BottomScreen"; // Import the BottomScreen component from your navigation/BottomScreen";
>>>>>>> ca07a65 (Aboutus)
=======
import BottomScreen from "../navigation/BottomScreen"; 

>>>>>>> 75e5302 (Second)
import Aboutus from "./Aboutus";
import Careers from "./Careers";
import Contactus from "./Contactus";
import Feedback from "./Feedback";
import Meet from "./Meet";
import Notifications from "./Notifications";
<<<<<<< HEAD
<<<<<<< HEAD

=======
import HomeScreen from "./HomeScreen";
>>>>>>> ca07a65 (Aboutus)
=======

import HomeScreen from "./HomeScreen";



>>>>>>> 75e5302 (Second)
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="HomeTabs" component={BottomScreen} />
      <Drawer.Screen name="About Us" component={Aboutus} />
      <Drawer.Screen name="Careers" component={Careers} />
      <Drawer.Screen name="Contact Us" component={Contactus} />
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="Meet Our Team" component={Meet} />
      <Drawer.Screen name="Notifications" component={Notifications} />
<<<<<<< HEAD
<<<<<<< HEAD
      
=======
      <Drawer.Screen name="Home" component={HomeScreen} />
>>>>>>> ca07a65 (Aboutus)
=======

      <Drawer.Screen name="Home" component={HomeScreen} />

>>>>>>> 75e5302 (Second)
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;