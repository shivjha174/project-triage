<?php
 use Ramsey\Uuid\Uuid;
 $uuid4 = Uuid::uuid4();
 $guid = $uuid4 ->toString();

// 0. Validate my data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();//getConnection belongs to singleton class.
//it returns the same connection everytime I instantiate
//PDO: Persistent Data object

// Step 2: Create & run the query
$stmt = $db->prepare('INSERT INTO Patient (patientGuid, firstName, lastName,
dob,sexAtBirth)VALUES (?,?,?,?,?)');
$stmt->execute([
  $guid,
  $_POST ['firstName'],
  $_POST ['lastName'],
  $_POST ['dob'],
  $_POST ['sexAtBirth']
]);

// TODO: Error checking?!

//Step 3:
header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid='.$guid);
