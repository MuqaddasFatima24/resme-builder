import { jsPDF } from 'jspdf';

export const generatePDF = ({ personalInfo, education, experience, skills }) => {
  const doc = new jsPDF();

  // Add Page Border
  doc.rect(5, 5, 200, 290); // Adds a border around the page

  // Add Personal Info Section
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 255); // Blue header text
  doc.text('Personal Information', 10, 20);
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  doc.text(`Name: ${personalInfo.name || 'N/A'}`, 10, 30);
  doc.text(`Contact: ${personalInfo.contact || 'N/A'}`, 10, 40);
  doc.text(`Email: ${personalInfo.email || 'N/A'}`, 10, 50);

  // Add Education Section
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 255);
  doc.text('Education', 10, 70);
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  if (education.length > 0) {
    education.forEach((edu, index) => {
      doc.text(
        `${index + 1}. ${edu.degree || 'N/A'} at ${edu.institution || 'N/A'} (${edu.year || 'N/A'})`,
        10,
        80 + index * 10
      );
    });
  } else {
    doc.text('No Education Details Added', 10, 80);
  }

  // Add Work Experience Section
  const workExperienceStartY = 110 + (education.length || 1) * 10;
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 255);
  doc.text('Work Experience', 10, workExperienceStartY);
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  if (experience.length > 0) {
    experience.forEach((exp, index) => {
      doc.text(
        `${index + 1}. ${exp.jobTitle || 'N/A'} at ${exp.company || 'N/A'} (${exp.duration || 'N/A'})`,
        10,
        workExperienceStartY + 10 + index * 10
      );
      doc.text(`Description: ${exp.description || 'N/A'}`, 20, workExperienceStartY + 20 + index * 10);
    });
  } else {
    doc.text('No Work Experience Added', 10, workExperienceStartY + 10);
  }

  // Add Skills Section
  const skillsStartY = workExperienceStartY + (experience.length || 1) * 20 + 30;
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 255);
  doc.text('Skills', 10, skillsStartY);
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  if (skills.length > 0) {
    skills.forEach((skill, index) => {
      doc.text(`${index + 1}. ${skill.name || 'N/A'} (${skill.level || 'N/A'})`, 10, skillsStartY + 10 + index * 10);
    });
  } else {
    doc.text('No Skills Added', 10, skillsStartY + 10);
  }

  // Save the PDF
  doc.save('resume.pdf');
};