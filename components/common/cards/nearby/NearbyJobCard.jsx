import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
     style={styles.container}
     onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
         source={{ 
          uri: job.employer_logo 
          ? job.employer_logo 
          : 'https://w7.pngwing.com/pngs/709/586/png-transparent-tie-suit-checkered-man-fashion-display-dummy-profile-loop-knot-shirt.png'
         }}
         resizeMode='contain'
         style={styles.logoImage}
        />
      </TouchableOpacity>
      
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard