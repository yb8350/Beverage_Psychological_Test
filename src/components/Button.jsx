function Button({ children }) {
  // // to 값이 존재하면 Link를 사용하고, 그렇지 않으면 div를 사용함.
  // // 비활성화되어 있는 버튼일 때도 div를 사용함.
  // const Element = to && !disabled ? Link : Div;

  // // 비활성화하면 onClick은 실행되지 않음.
  // return (
  //   <Element
  //     to={to}
  //     className={cx("button", theme, { disabled })}
  //     onClick={disabled ? () => null : onClick}
  //   >
  //     {children}
  //   </Element>
  // );
  return <button>{children}</button>;
}

export default Button;
