import java.util.StringTokenizer;
import java.io.*;


public class Main {
    public static void main(String[] args) throws IOException{
        // 여기에 코드를 작성해주세요.
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        
        print(n);
        System.out.println();
        printB(n);
    }

    static void print(int n){
        for(int i=1;i<=n;i++){
            System.out.print(i+" ");
        }

        
    }

    static void printB(int n){
        if(n==0)return;
        System.out.print(n+" ");
        printB(n-1);
    }
}