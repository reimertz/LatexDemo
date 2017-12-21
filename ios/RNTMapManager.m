//
//  RNTMapManager.m
//  LatexDemo
//
//  Created by Pierre Reimertz on 10/13/17.
//  Copyright © 2017 Facebook. All rights reserved.
//


#import "MTMathUILabel.h"

#import <React/RCTViewManager.h>

@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(latex, NSString)
RCT_EXPORT_VIEW_PROPERTY(fontSize, NSNumber)

- (UIView *)view
{
  MTMathUILabel* label = [[MTMathUILabel alloc] init];
  label.textAlignment = NSTextAlignmentCenter;
  return label;
}

@end
