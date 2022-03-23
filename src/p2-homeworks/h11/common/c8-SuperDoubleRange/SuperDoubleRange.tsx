import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import styles from './SuperDoubleRange.module.css';

type SuperDoubleRangePropsType = {
  onChangeRange: (value: [number, number]) => void;
  value: [number, number];
  step?: number;
  min?: number;
  max?: number;
  disable?: boolean;
  // min, max, step, disable, ...
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = memo(
  ({
    onChangeRange,
    value,
    step,
    min = value[0],
    max = value[1],
    disable,
    // min, max, step, disable, ...
  }) => {
    // сделать самому, можно подключать библиотеки
    const [minValue, maxValue] = value;
    const [isHoverThumb, setIsHoverThumb] = useState(false);

    const minRef = useRef<HTMLInputElement>(null);
    const maxRef = useRef<HTMLInputElement>(null);
    const minBadgeRef = useRef<HTMLDivElement>(null);
    const maxBadgeRef = useRef<HTMLDivElement>(null);
    const rangeContainerRef = useRef<HTMLDivElement>(null);

    const onChangeHandler = useCallback(
      (type: 'min' | 'max') => {
        const minRefValue = +minRef.current!.value;
        const maxRefValue = +maxRef.current!.value;

        if (minRefValue <= maxRefValue) {
          onChangeRange([minRefValue, maxRefValue]);

          return;
        }

        type === 'min' && onChangeRange([maxRefValue, maxRefValue]);
        type === 'max' && onChangeRange([minRefValue, minRefValue]);
      },
      [onChangeRange]
    );

    const toggleIsHoverThumb = useCallback(() => {
      setIsHoverThumb(!isHoverThumb);
    }, [isHoverThumb]);

    useEffect(() => {
      const maxRefValue = +maxRef.current!.value;

      if (minValue > maxRefValue) {
        onChangeRange([maxRefValue, maxRefValue]);

        return;
      }

      const percentValue = (minValue - min) / ((max - min) / 100);

      rangeContainerRef.current!.style.setProperty(
        '--start',
        `${percentValue}%`
      );

      const minZIndex = minValue > (max + min) / 2 ? '1' : '0';
      minRef.current!.style.setProperty('z-index', minZIndex);
      minBadgeRef.current!.style.setProperty('z-index', minZIndex);

      rangeContainerRef.current!.style.setProperty(
        '--minBadgetOffset',
        `${percentValue / 100}`
      );

      rangeContainerRef.current!.style.setProperty(
        '--minBadgetOffsetWidth',
        `${minBadgeRef.current!.offsetWidth}px`
      );
    }, [minValue, onChangeRange, max, min]);

    useEffect(() => {
      const minRefValue = +minRef.current!.value;

      if (maxValue < minRefValue) {
        onChangeRange([minRefValue, minRefValue]);

        return;
      }

      const percentValue = (maxValue - min) / ((max - min) / 100);

      rangeContainerRef.current!.style.setProperty('--end', `${percentValue}%`);

      rangeContainerRef.current!.style.setProperty(
        '--maxBadgetOffset',
        `${percentValue / 100}`
      );

      rangeContainerRef.current!.style.setProperty(
        '--maxBadgetOffsetWidth',
        `${maxBadgeRef.current!.offsetWidth}px`
      );
    }, [maxValue, onChangeRange, max, min]);

    return (
      <div
        className={`${styles.superDoubleRange}${
          disable ? ` ${styles.disable}` : ''
        }`}
      >
        <div className={styles.rangeInfo}>{min}</div>
        <div className={styles.rangeContainer} ref={rangeContainerRef}>
          <div className={styles.slider}>
            <div className={styles.bg}></div>
            <div
              className={`${styles.track}${
                isHoverThumb ? ` ${styles.activeTrack}` : ''
              }`}
            ></div>
            <div
              ref={minBadgeRef}
              className={`${styles.badge} ${styles.minBadge}`}
            >
              {minValue}
            </div>
            <div
              ref={maxBadgeRef}
              className={`${styles.badge} ${styles.maxBadge}`}
            >
              {maxValue}
            </div>
          </div>
          <input
            ref={minRef}
            type="range"
            value={minValue}
            className={styles.thumb}
            onChange={() => onChangeHandler('min')}
            onMouseEnter={toggleIsHoverThumb}
            onMouseLeave={toggleIsHoverThumb}
            step={step}
            disabled={disable}
            max={max}
            min={min}
          />
          <input
            ref={maxRef}
            type="range"
            value={maxValue}
            className={styles.thumb}
            onChange={() => onChangeHandler('max')}
            onMouseEnter={toggleIsHoverThumb}
            onMouseLeave={toggleIsHoverThumb}
            step={step}
            disabled={disable}
            max={max}
            min={min}
          />
        </div>
        <div className={styles.rangeInfo}>{max}</div>
      </div>
    );
  }
);

export default SuperDoubleRange;
