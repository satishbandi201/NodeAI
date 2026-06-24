pipeline {

 agent any

 stages {

  stage('Checkout') {
   steps {
    git 'https://github.com/your-repo.git'
   }
  }

  stage('Build') {
   steps {
    sh 'docker build -t sample-app .'
   }
  }

  stage('Push') {
   steps {
    sh '''
    docker tag sample-app satishdevops/sample-app:latest
    docker push satishdevops/sample-app:latest
    '''
   }
  }

  stage('Deploy') {
   steps {
    sh '''
    docker rm -f sample-app || true
    docker run -d --name sample-app -p 80:3000 satishdevops/sample-app:latest
    '''
   }
  }
 }
}