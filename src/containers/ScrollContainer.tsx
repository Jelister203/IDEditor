import {
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native';


interface ScrollContainerProps {
    children: React.ReactNode;
   }
   const ScrollContainer = (props: ScrollContainerProps) => {
    return (
    <SafeAreaView style={styles.backgroundStyle}>
    <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    contentContainerStyle={styles.contentContainer}
    style={styles.backgroundStyle}>
    {props.children}
    </ScrollView>
    </SafeAreaView>
    );
   };
   const styles = StyleSheet.create({
    contentContainer: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    },
    backgroundStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    },
   });

export default ScrollContainer;