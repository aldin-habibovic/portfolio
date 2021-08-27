FROM maven:3.8-jdk-11 as builder

# Copy local code to the container image.
WORKDIR /app
COPY pom.xml .
COPY src ./src

# Build a release artifact.
RUN mvn package -DskipTests

FROM adoptopenjdk/openjdk11:alpine-jre

# Copy the jar to the production image from the builder stage.
COPY --from=builder /app/target/portfolio-*.jar /portfolio.jar

# Run the web service on container startup.
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/portfolio.jar"]