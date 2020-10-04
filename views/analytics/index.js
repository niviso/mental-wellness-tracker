import React,{useState,useEffect,useContext,useRef} from 'react';
import {View,ScrollView,TouchableOpacity,Text,Alert,Touch,TouchableWithoutFeedback,Dimensions } from 'react-native';
import Styles from './style.scss';
import {AppContext} from '../../context/appContext';
import { SimpleAnimation } from 'react-native-simple-animations';
import {Edit,Exit,Plus,Acorn,Bee,Onion,Delete} from '../../parts/icon/icons';
import Icon from '../../parts/icon/';
import AsyncStorageHelper from '../../helpers/asyncStorageHelper';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default function Analytics(props) {
  const [state,setState] = useContext(AppContext);
  const data =  [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ];
  const config = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 0,
      width: '100%'
    },
    propsForDots: {
      r: "5",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }
  return (
    <View style={Styles.body}>
    <ScrollView style={Styles.wrapper}>
    <View style={Styles.innerBody}>
      <Text style={Styles.headline}>How do you feel today?</Text>
      <Text style={Styles.subtext}>View is work in progress</Text>

      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: data
            }
          ]
        }}
        width={Dimensions.get("window").width-20} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={config}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: data
            }
          ]
        }}
        width={Dimensions.get("window").width-20} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={config}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: data
            }
          ]
        }}
        width={Dimensions.get("window").width-20} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={config}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: data
            }
          ]
        }}
        width={Dimensions.get("window").width-20} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={config}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      </View>
    </ScrollView>
    </View>
  )
}
