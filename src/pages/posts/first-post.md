---
layout: '@/templates/BasePost.astro'
title: A Small Walkthrough of Museum Project
description: Creating a Database Management System with Python, which allows user to access with different roles and find the relevant museum data. It was our final project in ENSF300 course.
pubDate: 2022-12-22T00:00:00Z
imgSrc: '/assets/images/museum2.jpg'
imgAlt: 'Museum-Project'
---

#### Problem Narrative
You are tasked with developing an application for an art museum to maintain information about their
art objects database. The application will interface a database that you will design and create to hold the
required information, while the application will be used for data entry, maintenance, and information
retrieval. The following requirements have been observed and collected from discussions with the
customer:
- The museum has a collection of ART_OBJECTS. Each ART_OBJECT has a unique Id_no, an Artist (if
known), a Year (when it was created, if known), a Title, and a Description. The art objects are
categorized in several ways, as discussed below.
- ART_OBJECTS are categorized based on their type. There are three main types—PAINTING,
SCULPTURE, and STATUE—plus another type called OTHER to accommodate objects that do not
fall into one of the three main types.
- A PAINTING has a Paint_type (oil, watercolor, etc.), material on which it is Drawn_on (paper,
canvas, wood, etc.), and Style (modern, abstract, etc.).
- A SCULPTURE or a statue has a Material from which it was created (wood, stone, etc.), Height,
Weight, and Style.
- An art object in the OTHER category has a Type (print, photo, etc.) and Style.
- ART_OBJECTs are categorized as either PERMANENT_COLLECTION (objects that are owned by the
museum) and BORROWED. Information captured about objects in the PERMANENT_COLLECTION
includes Date_acquired, Status (on display, on loan, or stored), and Cost. Information captured
about BORROWED objects includes the Collection from which it was borrowed, Date_borrowed,
and Date_returned.
- Information describing the country or culture of Origin (Italian, Egyptian, American, Indian, and so
forth) and Epoch (Renaissance, Modern, Ancient, and so forth) is captured for each ART_OBJECT.
- The museum keeps track of ARTIST information, if known: Name, DateBorn (if known), Date_died
(if not living), Country_of_origin, Epoch, Main_style, and Description. The Name is assumed to be
unique.
- Different EXHIBITIONS occur, each having a Name, Start_date, and End_date. EXHIBITIONS are
related to all the art objects that were on display during the exhibition.
- Information is kept on other COLLECTIONS with which the museum interacts; this information
includes Name (unique), Type (museum, personal, etc.), Description, Address, Phone, and current
Contact_person.
Consider which elements of the functionality will need to be stored in the database and how they
interact with one another. Your design may be different from others- you have flexibility in how you
choose to meet the requirements of the client.

#### What is the goal?
Our goal is to create an application (command line minimum requirement, optional GUI or web
application or both) for the museum to help manage their arts database and events such as exhibitions.
This application will address the following 3 areas:
1. Manage art objects
- Add art pieces to the database
Every animal can have different properties based on type but some properties are the
same for example (Name, sex, age, RFID).
- Search art pieces and exhibitions.
2. User Management
- Add users
- Access control
- Manage users (such as block and suspend)
When designing your database, consider the following user requirements and functionalities:
All the users must log in to the application.
Admins
- Can add users.
- Can edit users.
- Can block users.
- Can make changes to database (modify tables attributes and constraints)
Data entry users
- Can add information tuples to the database as long as the information being added meets the
database constraints
- Can modify existing information in the database
End user
- Can lookup information in the database (ideally a remote user on a website that browses the
offerings of the museum, but we will have it simulated as part of the main program).

PROJECT URL: https://github.com/lilacchio/museum-project