const servicesDetails = [
  {
    id: 1,
    imageUrl: "https://rb.gy/sek2qt",
    title: "Web Development",
    path: "web-development",
    description:
      "At Work Momentum, we specialize in crafting exceptional web experiences tailored to your unique needs. Our team of experienced web developers utilizes the latest technologies and best practices to create websites that not only look stunning but also perform seamlessly across all devices. From simple static sites to complex web applications, we have the expertise to bring your vision to life. Whether you're looking to launch a new website or revamp an existing one, we're here to help you every step of the way.",
    servicesOffered: [
      {
        name: "Custom Web Application Development",
        description:
          "We develop customized web applications that meet your specific business requirements, ensuring scalability, security, and user-friendly interfaces.",
      },
      {
        name: "E-commerce Solutions",
        description:
          "Our e-commerce solutions help businesses establish online stores that are secure, scalable, and optimized for maximum conversion and user experience.",
      },
      {
        name: "Content Management Systems (CMS)",
        description:
          "We create robust CMS solutions that empower you to manage your website's content efficiently, enhancing flexibility and ease of use.",
      },
      {
        name: "Responsive Web Design",
        description:
          "We design websites that adapt seamlessly to various screen sizes and devices, ensuring an optimal user experience across desktops, tablets, and smartphones.",
      },
      {
        name: "UI/UX Design and Prototyping",
        description:
          "Our UI/UX design services focus on creating intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
      },
      {
        name: "Website Maintenance and Support",
        description:
          "We provide ongoing maintenance and support services to ensure your website remains secure, up-to-date, and performing at its best.",
      },
    ],
  },
  {
    id: 2,
    imageUrl: "https://www.isquarebs.com/img/web-app-development-choose.svg",
    title: "App Development",
    path: "app-development",
    description:
      "Transform your ideas into innovative mobile applications with Work Momentum. Our dedicated team of app developers is passionate about creating user-friendly and feature-rich apps that resonate with your target audience. Whether you're targeting iOS, Android, or cross-platform solutions, we have the skills and experience to build the perfect app for your business. From initial concept to final deployment, we'll work closely with you to ensure your app exceeds your expectations and drives results.",
    servicesOffered: [
      {
        name: "iOS App Development",
        description:
          "We specialize in developing native iOS applications that are tailored to the unique features and guidelines of the Apple ecosystem.",
      },
      {
        name: "Android App Development",
        description:
          "Our Android app development services include building native Android applications that offer seamless performance and usability on Android devices.",
      },
      {
        name: "Cross-Platform App Development",
        description:
          "We leverage cross-platform frameworks like React Native and Flutter to develop apps that run smoothly on both iOS and Android platforms, reducing development time and costs.",
      },
      {
        name: "Mobile App UI/UX Design",
        description:
          "We design intuitive and user-friendly interfaces for mobile apps that enhance usability, engage users, and align with your brand's identity.",
      },
      {
        name: "App Maintenance and Support",
        description:
          "We provide comprehensive app maintenance and support services to ensure your mobile application remains secure, updated, and fully functional.",
      },
      {
        name: "App Testing and QA",
        description:
          "Our rigorous testing and quality assurance processes help identify and eliminate bugs, ensuring your app delivers a seamless user experience.",
      },
    ],
  },
  {
    id: 3,
    imageUrl:
      "https://www.betasofttechnology.com/wp-content/uploads/2022/03/aws-banner.png",
    title: "AWS & DevOps",
    path: "aws-devops",
    description:
      "Harness the power of the cloud with Work Momentum's AWS and DevOps services. Our team of certified AWS experts can help you leverage Amazon Web Services to build scalable, secure, and reliable cloud solutions that meet your business needs. Whether you're looking to migrate to the cloud, optimize your existing AWS infrastructure, or implement DevOps best practices, we've got you covered. With our expertise in automation, continuous integration, and continuous delivery, we'll streamline your development process and accelerate your time to market. Let us be your trusted partner in the cloud journey.",
    servicesOffered: [
      {
        name: "AWS Cloud Consulting",
        description:
          "We offer expert guidance and consulting services to help businesses leverage AWS cloud solutions for their specific needs and objectives.",
      },
      {
        name: "AWS Architecture Design and Implementation",
        description:
          "Our AWS architects design and implement scalable and cost-effective cloud architectures that optimize performance and reliability.",
      },
      {
        name: "Cloud Migration Services",
        description:
          "We assist businesses in migrating their applications and data to AWS cloud, ensuring a seamless transition with minimal disruption.",
      },
      {
        name: "DevOps Automation and Integration",
        description:
          "We implement DevOps practices and automation tools to streamline development, testing, and deployment processes, improving efficiency and collaboration.",
      },
      {
        name: "Continuous Integration and Continuous Delivery (CI/CD)",
        description:
          "We implement CI/CD pipelines to automate and accelerate software delivery, ensuring faster time-to-market and higher-quality releases.",
      },
      {
        name: "Infrastructure as Code (IaC)",
        description:
          "We use Infrastructure as Code (IaC) tools like Terraform and CloudFormation to provision and manage cloud resources efficiently and consistently.",
      },
    ],
  },
];

function ServicesInfo() {
  return servicesDetails;
}

export default ServicesInfo;
