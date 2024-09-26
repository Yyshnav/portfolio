import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:porfolio/constants/colors.dart';
import 'package:porfolio/screens/widgets/text_widet.dart';
import 'package:url_launcher/url_launcher.dart';

class MyServicesWidget extends StatefulWidget {
  final Size size;
  const MyServicesWidget({super.key, required this.size});

  @override
  State<MyServicesWidget> createState() => _MyServicesWidgetState();
}

class _MyServicesWidgetState extends State<MyServicesWidget> {
  late List<bool> _isHovered;

  // Create a list of services to display
  final List<Map<String, String>> services = [
    {
      "title": "Driving Test Automation",
      "description": "Created Arduino system with Python, Dart, and embedded C for automated driving tests. Integrated sensor modules, IoT, and Flutter for streamlined registration, enhancing road safety and efficiency.",
    },
    {
      "title": "Crews Auto",
      "description": "An intuitive vehicle management app that simplifies car maintenance, allowing users to schedule appointments, track service history, and receive real-time updates, while service providers efficiently manage appointments and payments."
    },
    {
      "title": "Moto Hub",
      "description": "This website is a comprehensive solution designed to stimulate and optimize the maintenance and servicing of vehicles using PHP.",
    },
    {
      "title": "AdminUserApp",
      "description": "This Flutter app lets Admins add locations to Firebase, while Users can upload Excel files and view weather reports in multiple layouts. Firebase Authentication ensures separate Admin and User roles, with API integration for fetching real-time weather data."
    },
    {
      "title": "Weather App",
      "description": "This Flutter app provides real-time weather updates using APIs, offering forecasts, current conditions, and five-day predictions. Users can upload Excel files to get weather reports for multiple locations, displayed in various layouts. The app is optimized for mobile and web, ensuring a responsive and user-friendly experience."
    },
  ];

  @override
  void initState() {
    super.initState();
    _isHovered = List.generate(services.length, (index) => false); // Initialize based on services length
  }

  @override
  Widget build(BuildContext context) {
    // Get screen width to apply responsive design
    double screenWidth = MediaQuery.of(context).size.width;

    // Define breakpoints for different screen sizes
    bool isDesktop = screenWidth > 1024;
    bool isTablet = screenWidth > 600 && screenWidth <= 1024;
    bool isMobile = screenWidth <= 600;

    Future<void> _launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

    return ListView.builder(
      shrinkWrap: true,
      itemCount: services.length + 1, // Add one for the "See More" button
      itemBuilder: (context, index) {
        if (index == services.length) {
          // Return the "See More" button at the end
          return Padding(
  padding: const EdgeInsets.symmetric(vertical: 20.0, horizontal: 20),
  child: ElevatedButton(
    onPressed: () {
       _launchURL('https://github.com/Yyshnav');
    },
    child: Text(
      "See More",
      style: TextStyle(
        fontSize: 14, 
        color: Colors.white
        // Adjust the font size to make it smaller
      ),
    ),
    style: ElevatedButton.styleFrom(
      backgroundColor: AppColors.studio, // Your button color
      padding: EdgeInsets.symmetric(horizontal: 20, vertical: 2), // Smaller padding
      textStyle: TextStyle(
        fontSize: 14, // Set a smaller font size for the text
      ),
    ),
  ),
);}


        return MouseRegion(
          onEnter: (_) => setState(() => _isHovered[index] = true),
          onExit: (_) => setState(() => _isHovered[index] = false),
          child: AnimatedContainer(
            padding: EdgeInsets.symmetric(horizontal: 20, vertical: 40),
            duration: Duration(milliseconds: 300),
            curve: Curves.easeInOut,
            margin: EdgeInsets.symmetric(horizontal: screenWidth * 0.05),
            width: widget.size.width,
            decoration: BoxDecoration(
              color: _isHovered[index] ? null : Colors.transparent,
              border: Border.all(
                color: _isHovered[index]
                    ? AppColors.studio.withOpacity(0.5)
                    : Colors.transparent,
              ),
              gradient: _isHovered[index]
                  ? LinearGradient(
                      colors: [
                        AppColors.studio,
                        AppColors.ebony,
                      ],
                    )
                  : null,
            ),
            child: isDesktop
                ? _buildDesktopLayout(index) // Desktop layout
                : isTablet
                    ? _buildTabletLayout(index) // Tablet layout
                    : _buildMobileLayout(index), // Mobile layout
          ),
        );
      },
    );
  }

  // Widget for desktop layout
  Widget _buildDesktopLayout(int index) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        TextWidget(
          sSize: widget.size,
          text: "${index + 1}",
          size: 28,
          color: Colors.white,
        ),
        SizedBox(width: widget.size.height * 0.04),
        TextWidget(
          sSize: widget.size,
          text: services[index]['title']!, // Use service title
          size: 22,
          color: Colors.white,
        ),
        SizedBox(width: widget.size.height * 0.08),
        Flexible(
          child: TextWidget(
            sSize: widget.size,
            text: services[index]['description']!, // Use service description
            size: 16,
            color: Colors.white,
          ),
        ),
        FaIcon(
          _isHovered[index] ? FontAwesomeIcons.arrowTrendUp : FontAwesomeIcons.arrowTrendDown,
          color: _isHovered[index] ? Colors.white : AppColors.studio,
        ),
      ],
    );
  }

  // Widget for tablet layout
  Widget _buildTabletLayout(int index) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        TextWidget(
          sSize: widget.size,
          text: "${index + 1}",
          size: 26,
          color: Colors.white,
        ),
        SizedBox(height: widget.size.height * 0.02),
        TextWidget(
          sSize: widget.size,
          text: services[index]['title']!, // Use service title
          size: 20,
          color: Colors.white,
        ),
        SizedBox(height: widget.size.height * 0.02),
        TextWidget(
          sSize: widget.size,
          text: services[index]['description']!, // Use service description
          size: 16,
          color: Colors.white,
        ),
        SizedBox(height: widget.size.height * 0.02),
        FaIcon(
          _isHovered[index] ? FontAwesomeIcons.arrowTrendUp : FontAwesomeIcons.arrowTrendDown,
          color: _isHovered[index] ? Colors.white : AppColors.studio,
        ),
      ],
    );
  }

  // Widget for mobile layout
  Widget _buildMobileLayout(int index) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        TextWidget(
          sSize: widget.size,
          text: "${index + 1}",
          size: 24,
          color: Colors.white,
        ),
        SizedBox(height: widget.size.height * 0.02),
        TextWidget(
          sSize: widget.size,
          text: services[index]['title']!, // Use service title
          size: 18,
          color: Colors.white,
        ),
        SizedBox(height: widget.size.height * 0.02),
        Wrap(
          direction: Axis.horizontal,
          children: [
            TextWidget(
              alignment: TextAlign.center,
              sSize: widget.size,
              text: services[index]['description']!, // Use service description
              size: 14,
              color: Colors.white,
            ),
          ],
        ),
        SizedBox(height: widget.size.height * 0.02),
        FaIcon(
          _isHovered[index] ? FontAwesomeIcons.arrowTrendUp : FontAwesomeIcons.arrowTrendDown,
          color: _isHovered[index] ? Colors.white : AppColors.studio,
        ),
      ],
    );
  }
}
