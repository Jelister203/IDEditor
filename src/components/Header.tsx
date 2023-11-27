import {Text, StyleSheet} from 'react-native';
import styles from '../ccs/Style';

interface HeaderProps {
    text: string;
   }
   const Header = (props: HeaderProps) => {
    return <Text style={styles.title}>{props.text}</Text>;
   };

export default Header;