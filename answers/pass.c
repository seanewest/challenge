#include <string.h>
#include <stdio.h>

int main() {
  char pass[100];
  printf("guess the password!!\n");
  scanf("%s", pass);
  if (strcmp(pass,"Seanisthecoolest") == 0) {
    printf("You got it!!\n");
  } else {
    printf("No sir!\n");
  }

  return 0;
}
