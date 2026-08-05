package cn.gxl.lander.utils;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

public class ObjectMapper2 {

    private static ObjectMapper o = getDefaultObjectMapper();

    public static ObjectMapper getDefaultObjectMapper() {
        return new ObjectMapper().setSerializationInclusion(JsonInclude.Include.NON_NULL)
                .registerModule(javaTimeModule())
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .setVisibility(PropertyAccessor.GETTER, JsonAutoDetect.Visibility.NONE)
                .setVisibility(PropertyAccessor.IS_GETTER, JsonAutoDetect.Visibility.NONE)
                .setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);
    }

    private static SimpleModule javaTimeModule() {
        SimpleModule javaTimeModule = new SimpleModule();
        DateTimeFormatter localDateTime = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        DateTimeFormatter localDate = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        javaTimeModule.addSerializer(LocalDateTime.class, new LocalDateTimeSerializer(localDateTime));
        javaTimeModule.addDeserializer(LocalDateTime.class, new LocalDateTimeDeserializer(localDateTime));
        javaTimeModule.addSerializer(LocalDate.class, new LocalDateSerializer(localDate));
        javaTimeModule.addDeserializer(LocalDate.class, new LocalDateDeserializer(localDate));
        return javaTimeModule;
    }

    public static ObjectMapper getNormalOB() {
        return o;
    }

    public static String writeAsString(Object o) {
        try {
            return o == null ? "" : getNormalOB().writeValueAsString(o);
        } catch (JsonProcessingException e) {
            throw new AssertionError(e);
        }
    }

    public static <T> T readValue(String jsonStr, Class<T> c) {
        try {
            return getNormalOB().readValue(jsonStr, c);
        } catch (IOException e) {
            throw new AssertionError(e);
        }
    }
}
