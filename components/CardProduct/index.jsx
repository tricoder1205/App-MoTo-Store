import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

import Product from '../../assets/images/product.png'

export default function CardProduct () {
    return <View style={styles.card} >
        <Image style={styles.image} source={Product} />
        <Text style={styles.info}>
            <Text style={styles.title}>Ducati V4 S Panigale</Text>
            <Text style={styles.price}>Giá: 987.000.000đ</Text>
        </Text>
    </View>
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    info: {
        alignItems: 'left'
    },
    title: {
        width: '100%',
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 150,

    }
})
