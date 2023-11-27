import {
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native';
import styles from '../ccs/Style';


interface ScrollContainerProps {
    children: React.ReactNode;
   }
   const ScrollContainer = (props: ScrollContainerProps) => {
    return (
    <SafeAreaView style={styles.title}>
    <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    contentContainerStyle={styles.label}
    style={styles.label}>
    {props.children}
    </ScrollView>
    </SafeAreaView>
    );
   };
export default ScrollContainer;