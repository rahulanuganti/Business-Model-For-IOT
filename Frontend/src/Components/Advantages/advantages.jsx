import React from 'react';
import styles from './advantages.module.css'; // Import the CSS module

const WorkSection = ({ iotAdvantage, description }) => {
  return (
    <div className={styles.workSection}>
      <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>{iotAdvantage}</h1>
      <p style={{ color: '#333' }}>{description}</p>
    </div>
  );
};

const Advantages = () => {
  return (
    <div className={styles.main}>
      <h1 >Advantages of IOT</h1>
      <div className={styles.use}>
        <WorkSection
          iotAdvantage="IoT Advantages"
          description="The Internet of Things  offers numerous advantages, including improved efficiency, automation of tasks, and connectivity."
        />
        <WorkSection
          iotAdvantage="Integration with Everyday Objects"
          description="IoT integrates everyday objects with the internet, enabling them to collect data, communicate, and respond intelligently."
        />
        <WorkSection
          iotAdvantage="Cost Efficiency"
          description="The cost of IoT devices and components has decreased, making it more accessible to integrate computing power into smaller objects."
        />
        <WorkSection
          iotAdvantage="Industry Growth"
          description="The IoT industry is rapidly expanding, with smart devices being used in homes, offices to enhance efficiency and connectivity."
        />
         <WorkSection
          iotAdvantage="Remote Monitoring and Control"
          description="IoT enables remote monitoring and control of devices and systems, improving operational efficiency and responsiveness."
        />
        <WorkSection
          iotAdvantage="Environmental Impact"
          description="IoT technologies can help monitor and manage environmental factors, contributing to sustainability efforts them to collect data."
        />
      </div>
    </div>
  );
};

export default Advantages;
