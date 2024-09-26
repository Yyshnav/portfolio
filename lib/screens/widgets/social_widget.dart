import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:porfolio/constants/colors.dart';
import 'package:url_launcher/url_launcher.dart'; // Import url_launcher

class SocialWidget extends StatelessWidget {
  const SocialWidget({super.key});

  // Function to launch URL
  Future<void> _launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Container(
          height: 40,
          width: 40,
          decoration: BoxDecoration(
            color: Colors.transparent,
            shape: BoxShape.circle,
            border: Border.all(color: AppColors.studio.withOpacity(0.5)),
          ),
          child: Center(
            child: IconButton(
              hoverColor: AppColors.paleSlate,
              onPressed: () => _launchURL(
                  'https://www.linkedin.com/in/vaishnav-a-91722827a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'), // LinkedIn URL
              icon: FaIcon(
                FontAwesomeIcons.linkedinIn,
                color: AppColors.studio,
                size: 15,
              ),
            ),
          ),
        ),
        const SizedBox(width: 10),
        Container(
          height: 40,
          width: 40,
          decoration: BoxDecoration(
            color: Colors.transparent,
            shape: BoxShape.circle,
            border: Border.all(color: AppColors.studio.withOpacity(0.5)),
          ),
          child: Center(
            child: IconButton(
              hoverColor: AppColors.paleSlate,
              onPressed: () => _launchURL(
                  'https://dribbble.com/your-profile'), // Dribbble URL
              icon: FaIcon(
                FontAwesomeIcons.dribbble,
                color: AppColors.studio,
                size: 15,
              ),
            ),
          ),
        ),
        const SizedBox(width: 10),
        Container(
          height: 40,
          width: 40,
          decoration: BoxDecoration(
            color: Colors.transparent,
            shape: BoxShape.circle,
            border: Border.all(color: AppColors.studio.withOpacity(0.5)),
          ),
          child: Center(
            child: IconButton(
              hoverColor: AppColors.paleSlate,
              onPressed: () => _launchURL(
                  'https://www.upwork.com/freelancers/~your-profile'), // Upwork URL
              icon: FaIcon(
                FontAwesomeIcons.upwork,
                color: AppColors.studio,
                size: 15,
              ),
            ),
          ),
        ),
        const SizedBox(width: 10),
        Container(
          height: 40,
          width: 40,
          decoration: BoxDecoration(
            color: Colors.transparent,
            shape: BoxShape.circle,
            border: Border.all(color: AppColors.studio.withOpacity(0.5)),
          ),
          child: Center(
            child: IconButton(
              hoverColor: AppColors.paleSlate,
              onPressed: () =>
                  _launchURL('https://github.com/Yyshnav'), // GitHub URL
              icon: FaIcon(
                FontAwesomeIcons.github,
                color: AppColors.studio,
                size: 15,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
