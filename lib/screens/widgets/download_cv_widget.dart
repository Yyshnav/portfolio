import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:flutter/services.dart'; // For rootBundle
import 'package:path_provider/path_provider.dart';
import 'dart:io';
import 'package:open_file/open_file.dart';

class DownloadCVButton extends StatelessWidget {
  const DownloadCVButton({Key? key}) : super(key: key);

  Future<void> _downloadCV(BuildContext context) async {
    try {
      print("Attempting to get application documents directory...");
      final output = await getApplicationDocumentsDirectory();
      final filePath = "${output.path}/VAISHNAV_DEVELOPER.pdf";
      final file = File(filePath);

      print("Loading PDF from assets...");
      final byteData =
          await rootBundle.load('assets/cv/VAISHNAV_DEVELOPER.pdf');
      final bytes = byteData.buffer.asUint8List();

      print("Writing PDF to file...");
      await file.writeAsBytes(bytes);

      print("Opening the downloaded PDF...");
      await OpenFile.open(filePath);

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('CV downloaded successfully!')),
      );
    } catch (e) {
      print("Error downloading CV: $e");
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Failed to download CV. Please try again.')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () async {
        await _downloadCV(context);
      },
      child: Container(
        height: 50,
        width: 250,
        decoration: BoxDecoration(
          color: Colors.transparent,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: Colors.blue),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Download CV", style: TextStyle(color: Colors.blue)),
            const SizedBox.square(dimension: 12),
            FaIcon(FontAwesomeIcons.download, color: Colors.blue, size: 18),
          ],
        ),
      ),
    );
  }
}
