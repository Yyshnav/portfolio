import 'package:flutter/material.dart';
import 'package:porfolio/constants/colors.dart';
import 'package:porfolio/constants/styles.dart';
import 'package:porfolio/screens/widgets/count_container_widget.dart';
import 'package:porfolio/screens/widgets/header_text_widget.dart';
import 'package:porfolio/screens/widgets/myservice_widgets.dart';
import 'package:porfolio/screens/widgets/rotating_image_widget.dart';
import 'package:simple_gradient_text/simple_gradient_text.dart';

class DesktopLayout extends StatefulWidget {
  const DesktopLayout({super.key});

  @override
  State<DesktopLayout> createState() => _DesktopLayoutState();
}

class _DesktopLayoutState extends State<DesktopLayout> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      body: Container(
        height: double.infinity,
        width: double.infinity,
        decoration: Styles.gradientDecoration,
        child: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                margin: EdgeInsets.symmetric(vertical: size.height * 0.18),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        HeaderTextWidget(size: size),
                        SizedBox(height: 20),
                        Padding(
                          padding: EdgeInsets.only(
                              left: size.width *
                                  0.05), // Adjust this value to move further right
                          child: Social_large(size: size),
                        ),
                        SizedBox(height: 30),
                        _buildExperienceAndEducation(
                            size), // Call the function here
                      ],
                    ),
                    SizedBox(
                        width: size.width * 0.02), // Adds space between columns
                    RotatingImageContainer(), // No Expanded widget
                  ],
                ),
              ),
              Container(
                margin: EdgeInsets.symmetric(horizontal: size.width * 0.05),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    CountWidget(
                      size: size,
                      text1: "6+",
                      text2: "Months of",
                      text3: " Intern Experience",
                    ),
                    CountWidget(
                      size: size,
                      text1: "5+",
                      text2: "Projects",
                      text3: "Completed",
                    ),
                    CountWidget(
                      size: size,
                      text1: "10+",
                      text2: "Workshop",
                      text3: "Completed",
                    ),
                    CountWidget(
                      size: size,
                      text1: "10+",
                      text2: "Technology",
                      text3: "Explored",
                    ),
                  ],
                ),
              ),
              SizedBox(height: size.height * 0.12),
              Container(
                color: AppColors.ebony,
                padding: EdgeInsets.symmetric(vertical: size.width * 0.05),
                child: Column(
                  children: [
                    GradientText(
                      "My Quality Services",
                      colors: [
                        AppColors.studio,
                        AppColors.paleSlate,
                      ],
                      style: TextStyle(
                        fontSize: size.width * 0.025, // Reduced font size
                        fontFamily: 'Poppins',
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: size.height * 0.02),
                    Text(
                      'We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.',
                      style: TextStyle(
                        fontSize: size.width * 0.010, // Reduced font size
                        fontFamily: 'Poppins',
                        fontWeight: FontWeight.w400,
                        color: Colors.white,
                      ),
                    ),
                    SizedBox(height: size.height * 0.05),
                    MyServicesWidget(size: size),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildExperienceAndEducation(Size size) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: size.width * 0.05),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          GradientText(
            "Experience & Education",
            colors: [
              AppColors.studio,
              AppColors.paleSlate,
            ],
            style: TextStyle(
              fontSize: size.width * 0.025, // Reduced font size
              fontFamily: 'Poppins',
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: size.height * 0.02),
          // Experience List
          Text(
            "Relevant Experience",
            style: TextStyle(
              fontSize: size.width * 0.014, // Reduced font size
              fontFamily: 'Poppins',
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
          SizedBox(height: size.height * 0.01),
          Text(
            "→Flutter Developer Intern at Trycode Innovation Company: Worked on building mobile apps, UI design, and API integration.",
            style: TextStyle(
              fontSize: size.width * 0.010, // Reduced font size
              fontFamily: 'Poppins',
              color: Colors.white,
            ),
          ),
          Text(
            "→Freelance Mobile Developer: Developed multiple applications for small businesses with custom features.",
            style: TextStyle(
              fontSize: size.width * 0.010, // Reduced font size
              fontFamily: 'Poppins',
              color: Colors.white,
            ),
          ),
          SizedBox(height: size.height * 0.03),
          // Education List
          Text(
            "Educational Qualifications",
            style: TextStyle(
              fontSize: size.width * 0.014, // Reduced font size
              fontFamily: 'Poppins',
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
          SizedBox(height: size.height * 0.01),
          Text(
            "→Master's of Computer Applications, KTU University - 2024. ",
            style: TextStyle(
              fontSize: size.width * 0.010, // Reduced font size
              fontFamily: 'Poppins',
              color: Colors.white,
            ),
          ),
          Text(
            "→Completed Certified Flutter Developer Course.",
            style: TextStyle(
              fontSize: size.width * 0.010, // Reduced font size
              fontFamily: 'Poppins',
              color: Colors.white,
            ),
          ),
        ],
      ),
    );
  }
}
