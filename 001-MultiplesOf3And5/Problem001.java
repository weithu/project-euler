class Problem001 {
  public static void main(String[] args){
    int i = 0;
    for(i = 1; i < 100; i++){
      if(i % 3 == 0 || i % 5 == 0){
        ans += i;
      }
    }
    System.out.print(ans);
  }
}
