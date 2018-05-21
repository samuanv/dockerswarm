package edu.uv.twcam.counters.controller;

import edu.uv.twcam.counters.service.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class CountersController{
   private static final Logger logger = LoggerFactory.getLogger(CountersController.class);

   @Autowired
   private CountersService srv;

   @RequestMapping(value="/increment/{key}", produces = {"text/html"})
   public String increment(@PathVariable String key){
      logger.debug("increment "+ key +" called");
      return srv.increment(key);
   }

   @RequestMapping(value="/get/{key}", produces = {"text/html"})
   public String get(@PathVariable String key){
      logger.debug("get "+ key +" called");
      return srv.get(key);
   }

   @RequestMapping(value="/decrement/{key}", produces = {"text/html"})
   public String decrement(@PathVariable String key){
      logger.debug("decrement "+ key +" called");
      return srv.decrement(key);
   }
}
