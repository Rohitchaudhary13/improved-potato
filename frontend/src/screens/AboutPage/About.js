import { Container } from "react-bootstrap";
import React from "react";
import MainScreen from "../../components/MainScreen";

const About = () => {
  return (
    <div className="about">
      <MainScreen title={`About`}>
        <Container>
        The <b>Salaah Mentorship Program </b> is designed to provide support and
        guidance to young professionals as they navigate their careers. One key
        component of this program is the <b>Salaah Talent Evaluation Portal (STEP) </b>,
        which is used by mentors to assess applicants and identify the best
        prospects for interviews. This portal provides ongoing reports that
        track the progress of each group and offer a sense of competitiveness
        for students, helping them to refine and improve their resumes. 
        <br />The mentors who participate in the Salaah Mentorship Program play an
        essential role in helping students to achieve their goals. They bring a
        wealth of experience and knowledge to the table, and their ability to
        see what others cannot see is invaluable. They guide mentees through the
        process, providing insight and feedback that helps them to grow and
        develop as professionals. We are very grateful to all of the mentors who
        participate in the Salaah program, and we thank them for their time and
        dedication. <br />Our goal is to empower our 1200+ pupils to become
        well-rounded professionals with the necessary skills to land their first
        job, as a favour to their parents. We want to <b>repay the community of
        ABESEC </b> by transforming the lives of our students, and we believe that
        the guidance and support provided by mentors is critical to achieving
        this goal. With the help of our dedicated mentors, we are confident that
        our students will be able to achieve success in their careers.
        <br />
        <i>"One of the greatest values of mentor is the ability to see ahead of what others can see and help them navigate a better course to the destination."</i>
        <br /> <br /> <br />
        <h2 className="unbounded">Leaders of the programme</h2>
        <br />
        <h3 className="unbounded">Mr. Kunal Tyagi (Incharge Salaah)</h3>
        Kunal is a dedicated and hardworking individual who is committed to
        assisting in the general administration and operation of the site and
        the programme. He has a wealth of experience in managing and
        coordinating projects, and is skilled at problem-solving and
        decision-making. Kunal is also highly organized and efficient, which
        makes him an invaluable asset to the team. He is always willing to go
        above and beyond to ensure that the site and programme run smoothly, and
        that all stakeholders are satisfied with the results. Kunal is an
        excellent communicator and always keeps everyone informed of any changes
        or updates. With Kunal on board, you can rest assured that the site and
        programme will be in good hands. <br />
        <br />
        <h3 className="unbounded">Mr. Utkrash Goel and Mr. Rohit Chaudhary</h3>
        Rohit and Utkarsh are a dynamic duo that will be instrumental in
        ensuring the smooth operation of the program and portal. Their expertise
        in technology and their ability to work well together make them the
        perfect team to assist in the overall technological operation. Rohit
        brings a wealth of experience in programming and software development,
        while Utkarsh brings a strong background in system administration and
        network management. Together, they will work to ensure that the program
        and portal run efficiently and effectively, providing users with the
        best possible experience. With Rohit and Utkarsh on board, the program
        and portal are sure to be a success.
        <br />
        <br />
        <br />
        <h3 className="unbounded">Contact Details</h3>
        For any queries contact us at <b>Salaah@abes.ac.in</b>
        <br />
        Kunal Tyagi : 8791641256
        <br />
        Utkrash goel : 8860340198
        <br />
        Rohit Chaudhary : 8882167794
        </Container>
      </MainScreen>
    </div>
  );
};

export default About;
