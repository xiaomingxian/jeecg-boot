package org.jeecg.modules.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.jeecg.common.api.vo.Result;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@Api(tags = "业务测试接口")
@RestController
@RequestMapping("yw")
public class YwController {


    @ApiOperation("业务测试接口")
    @GetMapping("ywTest")
    public Result<String> ywTest() {
        Result<String> result = new Result<>();

        result.setCode(1);
        result.setMessage("业务测试222");
        result.setResult("业务测试22");
        result.setTimestamp(new Date().getTime());
        result.setSuccess(true);

        return result;
    }

}
