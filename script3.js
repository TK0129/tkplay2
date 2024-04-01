function readmyfile() {
  
  BufferedReader abc = new BufferedReader(new FileReader(LumpSum.txt));
  List<String> lines = new ArrayList<String>();
  
  while((line = abc.readLine()) != null) {
    lines.add(line);
    System.out.println(data);
  }
  
  abc.close();
  
  // If you want to convert to a String[]
  String[] data = lines.toArray(new String[]{});

}
