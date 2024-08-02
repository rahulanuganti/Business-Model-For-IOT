import React from 'react';
import iot from '../assets/IOT-1.jpg';
import styles from './Description.module.css';

const Description = () => {

  return (
    <div className={styles.description}>
      <h1>Description about IOT</h1>
      <img src={iot} alt="IoT" />
      <p>
        The term IoT, or Internet of Things, refers to the collective network of connected devices and the technology that facilitates communication between devices
        and the cloud, as well as between the devices themselves. Thanks to the advent of inexpensive computer chips and high bandwidth telecommunication, we now have
        billions of devices connected to the internet. This means everyday devices like toothbrushes, vacuums, cars, and machines can use sensors to collect data and
        respond intelligently to users. The Internet of Things integrates everyday “things” with the internet. Computer Engineers have been adding sensors and processors
        to everyday objects since the 90s. However, progress was initially slow because the chips were big and bulky. Low power computer chips called RFID tags were first
        used to track expensive equipment. As computing devices shrank in size, these chips also became smaller, faster, and smarter over time. The cost of integrating computing
        power into small objects has now dropped considerably. For example, you can add connectivity with Alexa voice services capabilities to MCUs with less than 1MB embedded
        RAM, such as for light switches. A whole industry has sprung up with a focus on filling our homes, businesses, and offices with IoT devices. These smart objects can automatically
        transmit data to and from the Internet.
      </p>
    </div>
  );
};

export default Description;
