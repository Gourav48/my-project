import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'


const Refresh = () => {
    const [Item, setItem] = useState([
        { key: 1, item: 'item 1' },
        { key: 2, item: 'item 2' },
        { key: 3, item: 'item 3' },
        { key: 4, item: 'item 4' },
        { key: 5, item: 'item 5' },
        { key: 6, item: 'item 6' },
        { key: 7, item: 'item 7' },
        { key: 8, item: 'item 8' },
        { key: 9, item: 'item 9' },
        { key: 10, item: 'item 10' },
        { key: 11, item: 'item 11' },

    ])

    const [Refreshing, setRefreshing] = useState(false)
    const onRefresh = (() => {
        setRefreshing(true);
    setItem([...Item,{key:60,item:'item 70'}])
    setRefreshing(false)

}
    
    )


    return (

        <ScrollView
            style={styles.container}
            // contentContainerStyle={styles.scrollView}
            refreshControl={
                <RefreshControl
                    refreshing={Refreshing}
                    onRefresh={onRefresh}
                />
            }
        >





            {
                Item.map((Object) => {
                    return (
                        <View style={styles.item} key={Object.key}>
                            <Text style={styles.text}>{Object.item}</Text>
                        </View>



                    )
                })

            }

        </ScrollView>

    )
}

export default Refresh

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
    container: {
        flex: 1,
        // flexDirection: 'column',
        // backgroundColor: '#0ff',
        // // borderColor: "red", borderWidth: 2,
        // justifyContent:"center",
        // alignItems:"center"
    },
    item: {
        margin: 10,
        backgroundColor: '#4ae1fa',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10

    },
    text: {
        color: '#000',
        fontSize: 45,
        fontStyle: 'italic',

    }
})
// import React, { useState } from 'react';
// import { Pressable, StyleSheet, Text, View } from 'react-native';

// const App = () => {
//   const [timesPressed, setTimesPressed] = useState(0);

//   let textLog = '';
//   if (timesPressed > 1) {
//     textLog = timesPressed + 'x onPress';
//   } else if (timesPressed > 0) {
//     textLog = 'onPress';
//   }

//   return (
//     <View style={styles.container}>
//       <Pressable
//         onPress={() => {
//           setTimesPressed((current) => current + 1);
//         }}
//         style={({ pressed }) => [
//           {
//             backgroundColor: pressed
//               ? 'red'
//               : 'white'
//           },
//           styles.wrapperCustom
//         ]}>
//         {({ pressed }) => (
//           <Text style={styles.text}>
//             {pressed ? 'Pressed!' : 'Press Me'}
//           </Text>
//         )}
//       </Pressable>
//       <View style={styles.logBox}>
//         <Text testID="pressable_press_console">{textLog}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 16,
    
//   },
//   wrapperCustom: {
//     borderRadius: 8,
//     padding: 6
//   },
//   logBox: {
//     padding: 20,
//     margin: 10,
//     borderWidth: StyleSheet.hairlineWidth,
//     borderColor: '#f0f0f0',
//     backgroundColor: '#f9f9f9'
//   }
// });

// export default App;