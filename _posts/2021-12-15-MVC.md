# MVC(Model-Voew-Controller) Parttern

MVC란 **M**odel **V**iew **C**ontroller의 약자로 어플리케이션을 세가지의 역할로 구분한 개발 방법론이다. 아래의 그림처럼 사용자가 Controller를 조작하면 Controller는 Model을 통해서 데이터를 가져오고 
그 정보를 바탕으로 시작적인 표현을 담당하는 View를 제어해서 사용자에게 전달하게 된다.
<div align="center">
  
![image](https://user-images.githubusercontent.com/41848169/146730828-1bac0679-2068-4677-8b8b-b33d10138174.png)

</div>

## Web과 MVC

위의 개념을 웹에 적용해보자.
- 사용자가 웹사이트에 접속한다. (Uses)
- Controller는 사용자가 요청한 웹페이지를 서비스 하기 위해서 모델을 호출한다. (Manipulates)
- Controller는 Model이 리턴한 결과를 View에 반영한다 (Updates)
- 데이터가 반영된 View는 사용자에게 보여진다. (Sees)

## CodeIgniter와 MVC
### Controller
사용자가 접근 한 URL에 따라서 사용자의 요청사항을 파악한 후에 그 요청에 맞는 데이터를 Model에 의뢰하고, 데이터를 View에 반영해서 사용자에게 알려준다.
### Model
일반적으로 CL의 모델은 데이터베이스 테이블에 대응된다. 이를테면 Topic이라는 테이블을 topic_model이라는 Model을 만든다.
그런데 이 관계가 강제적이지 않기 때문에 규칙을 일관성 있게 정의하는 것이 필요하다.
### View
View는 클라이언트 측 기술인 html/css/javascript들을 모아둔 컨테이너이다.
## CI의 MVC규칙

아래는 CL에서 Controller과 Model과 View 간의 관계를 시각화 한 것이다.
![image](https://user-images.githubusercontent.com/41848169/146731612-d6321fbc-d736-444f-ba66-beaddf604e9d.png)

# 참조
https://opentutorials.org/course/697/3828

