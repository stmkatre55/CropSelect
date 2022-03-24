import React, { useEffect, useState } from 'react';
import {
    View, Text, StyleSheet,
    StatusBar,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icons from 'react-native-vector-icons/dist/FontAwesome';



const App = () => {

    const CONTENT = [
        {
            isExpanded: false,
            category_name: 'Horticulture Crop',
            sub_category:[
                {  isClicked: false, id:1, name:'Tomato', path:'https://4.imimg.com/data4/YT/RJ/MY-23625743/fresh-tomato-250x250.jpg'},
                { isClicked: false, id:2, name:'Bhendi', path:'https://5.imimg.com/data5/AI/GA/MY-51545753/sg-bhendi-2c-1kg-500x500.png'},
                { isClicked: false, id:3, name:'Capsicum', path:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Red_capsicum_and_cross_section.jpg/1200px-Red_capsicum_and_cross_section.jpg'},
                { isClicked: false, id:4, name:'Pumpkin', path:'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/pumpkin-3f3d894.jpg?quality=90&resize=661%2C600'},
                { isClicked: false,id:5, name:'Tinda', path:'https://www.bigbasket.com/media/uploads/p/m/10000372_11-fresho-tinda.jpg'},
                { isClicked: false,id:6, name:'Muskmelon', path:'https://m.media-amazon.com/images/I/61-o63DAQBL._SL1100_.jpg'},
                { isClicked: false,id:7, name:'BitterGourd', path:'https://www.ketoindia.fit/health/wp-content/uploads/2021/04/Bitter-Gourd-in-Keto-Diet.jpg'},
                { isClicked: false,id:8, name:'AshGourd', path:'https://images.sadhguru.org/d/46272/1633204872-1633204871619.jpg'},
    
            ]
        },
        {
            isExpanded: false,
            category_name: 'Filed Crop',
            sub_category:[
                {id:1, name:'Rice', path:'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322775_2200-1200x628.jpg'},
                {id:2, name:'pearl', path:'https://www.candere.com/blog/wp-content/uploads/2018/06/Pearl-Jewellery.jpg'},
                {id:3, name:'sorghum', path:'https://www.liveeatlearn.com/wp-content/uploads/2021/01/how-to-cook-sorghum-vert.jpg'},
                {id:4, name:' maize', path:'https://ncdex.com/public/uploads/commodity/image/Maize-Kharif-South.jpg'},
                {id:5, name:'pigeonpea', path:'https://www.feedipedia.org/sites/default/files/images/Cajanus_seeds.jpg'},
                {id:6, name:'cotton', path:'https://images.ctfassets.net/3s5io6mnxfqz/4TV7YTCO1DJuMhhn7RD1Ol/b5a6c12340e6529a86bc1b557ed2d8f8/AdobeStock_136921602.jpeg?fm=jpg&w=900&fl=progressive'},
                {id:7, name:'mungbean', path:'https://media.istockphoto.com/photos/mung-beans-isolated-on-white-picture-id1061909094?k=20&m=1061909094&s=612x612&w=0&h=wLHqDEUI4hKLaHDGF69l53iV0LetlW9433KzX87Vllk='},
                {id:8, name:'potato ', path:'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?b=1&k=20&m=157430678&s=170667a&w=0&h=EY1tYKyL7VK84Xrj3vXRQee29NocctYXWBkdGdDQIow='},
    
            ]
        },
        {
            isExpanded: false,  
            category_name: 'Oilseed Crop',
            sub_category:[
                {id:1, name:'Groundnut', path:'https://img.etimg.com/thumb/msid-50228959,width-650,imgsize-131322,,resizemode-4,quality-100/.jpg'},
                {id:2, name:'Sesame', path:'https://domf5oio6qrcr.cloudfront.net/medialibrary/6195/17f1f1f9-da43-405a-b3b4-4d1fcb5cec51.jpg'},
                {id:3, name:'Soyabean', path:'https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2021/02/11/761188-soyabean-side-effects.jpg?itok=YhnUEqEl'},
                {id:4, name:'musturd', path:'https://img.onmanorama.com/content/dam/mm/en/food/diet-and-nutrition/images/2020/9/5/mustard-seeds.jpg'},
                {id:5, name:'Rapeseed', path:'https://5.imimg.com/data5/UW/LN/PY/SELLER-9858445/rape-seed-500x500.jpg'},
                
            ]
        }
    ]
    
    const ExpandableComponent = ({item, onClickFunction, onClickFunction1}) => {
        const [layoutHeight, setlayoutHeight] = useState(0);
       
    
        useEffect(() => {
            if (item.isExpanded){
                setlayoutHeight(null);
            }else{
                setlayoutHeight(0);
            }
        }, [item.isExpanded])
    
        return(
            <View>
                <TouchableOpacity 
                    style={styles.item}
                    onPress={onClickFunction}
                >
                   <Text  style={styles.itemText}>
                       {item.category_name}
                        </Text>
                    <Text>{item.isExpanded ? <Icon name="up" size={20} color={"green"}/> : <Icon name="down" size={20} color={"green"}/>}</Text>
                </TouchableOpacity>
                <View
                    style={[styles.viewComponent,{ height:layoutHeight},
                        {overflow:'hidden'}]}
                >
                    {
                        item.sub_category.map((item1, key) =>(
                            
                            <TouchableOpacity
                                key={key}
                                style={styles.sub_category}
                                onPress={onClickFunction1}
                            >
                               
                                {
                                    item.isClicked ? <Image style={styles.img}  source={{uri:item1.path}}/> :
                                    <Image style={styles.img1} source={{uri:item1.path}}/>
                                } 
                               
                                <Text style={styles.text1}>
                                   {item1.name}
    
                                </Text>
                                <View style={styles.seprator}/>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        )
    }
    
    
    const [listDataSource, setListDataSource] = useState(CONTENT);
    const [listDataSource1, setListDataSource1] = useState([]);
    console.log(listDataSource1)
    // const [isChecked, setIsChecked] = useState(false);

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        console.log(array)
        if(true){
            array[index]['isExpanded'] = !array[index]['isExpanded'];
            console.log('hello')
        }
        setListDataSource(array)
    }
    const updateLayout1 = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        
        let tempArray = []
        for (let item of listDataSource) {
              tempArray.push(item.sub_category[index])
            }
        console.log(tempArray)
        setListDataSource1(tempArray)
        const array = [...listDataSource1];
        if(true){
            array[index]['isClicked'] = !array[index]['isClicked'];
            console.log(array[index],"array index")
            console.log('Clicked')
        }
        setListDataSource1(array)
    }

  
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'green'} />
            <View style={styles.header}>
                <Text style={[{ fontSize: 20 }, { color: '#FFF' }, { fontWeight: 'bold' }]}>Select Crop</Text>
            </View>
            <View style={styles.footer}>

                <ScrollView>
                    <View style={{margin:'3%'}}>
                        <TextInput style={styles.input} placeholder={'Search'}>
                        {/* <Icons style={styles.searchIcon} name="search" size={20} color={'#FFF'} /> */}
                        </TextInput>
                        <Text style={styles.text}> Select at least 5 crops</Text>
                    </View>
                    <View>
                        {
                            listDataSource.map((item, key) => (
                                <ExpandableComponent 
                                    key={item.category_name}
                                    item={item}
                                    onClickFunction={() => {
                                        updateLayout(key)
                                    }}
                                    onClickFunction1={() => {
                                        updateLayout1(key)
                                    }}
                                />
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: .4,
        backgroundColor: 'green',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center'
    },
    footer: {
        flex: 6,
        backgroundColor: '#FFF',
        paddingHorizontal: '3%',
        paddingVertical: '2%',

    },
    collapse: {
        margin: '1%'
    },
    colContainer: {

    },
    colHeader: {

        flexDirection: 'row'
    },
    colInner: {
        flex: 1,
        alignItems: 'center',
        padding: '2%'
    },
    text: {
        fontSize: 16,
        color: 'green',
        fontWeight: '800',
        textAlign:'center'
    },
    innerText: {
        fontSize: 14,
        color: 'gray',
        fontWeight: '500'
    },
    img: {
        width: 90,
        height: 90,
        borderRadius: 20,
        borderWidth:2,
        borderColor:'green'
        
    },
    img1: {
        width: 90,
        height: 90,
        borderRadius: 20,
        borderWidth:2,
        borderColor:'#000'
        

    },
    icon:
    {
        position: 'absolute',
        left: 58,
        top: -10,
        width: 80,
        height: 80,
    },
    item:{
        backgroundColor:'orange',
        padding:10,
        margin:'2%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemText:{
        fontSize:18,
        fontWeight:'500'
    },
    sub_category:{
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:"#fff",
        marginTop:'2%'
       
    },
    text1:{
        padding:2,
        fontSize:14,
        textAlign:'center',
        margin:'5%'
    },
    seprator:{
        height:0.5,
        backgroundColor:'#c8c8c8',
        width:'100%'
    },
    viewComponent:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center'
    },
    searchIcon:{
        position: 'absolute',
        right: -1,
        top: 1,
        // width: 80,
        // height: 80,
    },
    input: {

        width: '100%',
        height: 40,
        color: '#05375a',
        backgroundColor: '#73B0C3',
        borderRadius: 20,
        paddingLeft: 30,
        paddingRight: 30,
        shadowColor: "#FFF",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 7,
        fontSize: 16,
        marginBottom:'2%'
        
       

    }
})
export default App;