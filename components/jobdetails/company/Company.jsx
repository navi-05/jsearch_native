import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'

const Company = ({ companyLogo, jobTitle, companyName, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
         source={{
          uri: companyLogo 
               ? companyLogo 
               : 'https://w7.pngwing.com/pngs/709/586/png-transparent-tie-suit-checkered-man-fashion-display-dummy-profile-loop-knot-shirt.png'
         }}
         style={styles.logoImage}
        />
      </View>
      <View styles={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image 
           source={icons.location}
           resizeMode="contain"
           style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company