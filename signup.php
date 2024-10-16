<?php
// define variables and set to empty values
$Username = $Email = $Password = $Password2 = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $Username = test_input($_POST["Username"]);
  $Email = test_input($_POST["Email"]);
  $Password = test_input($_POST["Password"]);
  $Password2 = test_input($_POST["Password2"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<?php
echo "<h2>Your Input:</h2>";
echo $Username;
echo "<br>";
echo $Email;
echo "<br>";
echo $Password;
echo "<br>";
echo $Password2;
echo "<br>";
?>